const Hero = () => {
  return (
    <div id="mainpart">
      
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'black',
          zIndex: 1,
          width: '90%', // Ограничиваем ширину для мобильных устройств
          maxWidth: '800px', // Максимальная ширина для десктопов
          padding: '0 20px', // Добавляем отступы по бокам
          boxSizing: 'border-box', // Учитываем padding в ширине
        }}
        id="about"
      >
        {/* Название проекта */}
        <h1
          style={{
            fontSize: 'clamp(8rem, 8vw, 8rem)', // Уменьшаем максимальный размер для iPhone
            fontWeight: 'bold',
            margin: 0,
            lineHeight: 1.2, // Увеличиваем line-height для лучшей читаемости
            fontFamily: 'Arial, sans-serif',
            overflowWrap: 'break-word', // Перенос длинных слов
            wordBreak: 'break-word', // Перенос слов, если они не помещаются
          }}
        >
          AWE_CODE
        </h1>

        {/* Подпись */}
        <p
          style={{
            fontSize: 'clamp(0.9rem, 3vw, 1.2rem)', // Уменьшаем размер для iPhone
            margin: '1rem 0 0',
            fontFamily: 'Arial, sans-serif',
            opacity: 0.8,
            overflowWrap: 'break-word', // Перенос длинных слов
            wordBreak: 'break-word', // Перенос слов, если они не помещаются
          }}
        >
          Лучшие IT решения
        </p>

        {/* Кнопка для связи в Telegram с иконкой */}
        <a
          href="https://t.me/urlfvck" 
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginTop: '2rem',
            padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 4vw, 1.5rem)', // Адаптивный padding
            fontSize: 'clamp(0.9rem, 3vw, 1rem)', // Адаптивный размер шрифта
            fontWeight: 'bold',
            color: 'black',
            backgroundColor: 'transparent',
            border: '2px solid black',
            borderRadius: '50px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            overflowWrap: 'break-word', // Перенос длинных слов
            wordBreak: 'break-word', // Перенос слов, если они не помещаются
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'black';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'black';
          }}
        >
          Написать в Telegram
        </a>
      </div>

      <div id="portfolio">

          {/* Дополнительный контент для прокрутки */}
        <div style={{ position: 'relative', zIndex: 1, padding: '20px', marginTop: '100vh', alignSelf: 'center'}}>
          <h2>Проекты</h2>
          <p>
            Портфолио
          </p>
          <div style={{ height: '100vh' }}>
            <p>Дополнительный контент...</p>
          </div>
        </div>

      </div>
      <div id="services">

        {/* Дополнительный контент для прокрутки */}
        <div style={{ position: 'relative', zIndex: 1, padding: '20px', marginTop: '100vh', alignSelf: 'center'}}>
          <h2>Сервисы</h2>
          <p>
            Услуги
          </p>
          <div style={{ height: '100vh' }}>
            <p>Дополнительный контент...</p>
          </div>
        </div>

      </div>
      
      <div id="contact">

          {/* Дополнительный контент для прокрутки */}
        <div style={{ position: 'relative', zIndex: 1, padding: '20px', marginTop: '100vh', alignSelf: 'center'}}>
          <h2>Контакты</h2>
          <p>
            Телега
          </p>
          <div style={{ height: '100vh' }}>
            <p>Дополнительный контент...</p>
          </div>
        </div>

      </div>
      

      </div>
      

  );
};

export default Hero;