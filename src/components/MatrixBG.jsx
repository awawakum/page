import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);
  const points = useRef([]);
  const scrollY = useRef(1);
  const prevScrollY = useRef(0);

  // Генерация случайных точек
  const generatePoints = (canvas) => {
    const numPoints = 100; // Количество точек
    points.current = [];
    for (let i = 0; i < numPoints; i++) {
      points.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: (Math.random() * 0.5 + 0.2) * (Math.random() > 0.5 ? 1 : -1), // Скорость и направление
      });
    }
  };

  // Отрисовка точек и линий
  const draw = (ctx, canvas) => {
    // Очищаем Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Рисуем точки и линии
    points.current.forEach((point, i) => {
      // Обновляем позицию точки в зависимости от прокрутки
      const deltaScroll = scrollY.current - prevScrollY.current;
      point.y += point.speed * (deltaScroll / 10);

      // Если точка вышла за пределы Canvas, возвращаем её в начало
      if (point.y > canvas.height) {
        point.y = 0;
      } else if (point.y < 0) {
        point.y = canvas.height;
      }

      // Рисуем точку
      ctx.beginPath();
      ctx.arc(point.x, point.y, 2, 0, Math.PI * 2); // Точка (круг)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'; // Цвет точки
      ctx.fill();

      // Рисуем линии между близкими точками
      points.current.slice(i + 1).forEach((otherPoint) => {
        const distance = Math.sqrt(
          Math.pow(point.x - otherPoint.x, 2) + Math.pow(point.y - otherPoint.y, 2)
        );
        if (distance < 100) { // Если точки близко, рисуем линию
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(otherPoint.x, otherPoint.y);
          ctx.strokeStyle = `rgba(0, 0, 0, ${1 - distance / 100})`; // Прозрачность линии
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });

    // Запускаем следующий кадр анимации
    requestAnimationFrame(() => draw(ctx, canvas));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Устанавливаем размеры Canvas равными размеру окна
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Генерация точек
    generatePoints(canvas);

    // Запуск анимации
    draw(ctx, canvas);

    // Обработчик прокрутки
    const handleScroll = () => {
      prevScrollY.current = scrollY.current;
      scrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    // Очистка при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Фон под всеми элементами
        touchAction: 'none', // Отключаем стандартные действия касания
      }}
      onTouchStart={(e) => e.preventDefault()} // Предотвращаем стандартные действия
      onTouchMove={(e) => e.preventDefault()} // Предотвращаем стандартные действия
    />
  );
};

export default MatrixBackground;