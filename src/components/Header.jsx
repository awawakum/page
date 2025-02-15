// components/Header.jsx
import { useEffect, useState, useRef } from "react";
import "./css/Header.css"; // Подключаем стили

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const prevScrollY = useRef(0); // Для отслеживания направления скролла

  // Плавный скролл до секции
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      // Обновляем активный раздел после завершения скролла
      setTimeout(() => {
        setActiveSection(id);
      }, 250); // Задержка в 500 мс
    }
  };

  // Отслеживаем скролл и активную секцию
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Прячем или показываем header при скролле вниз/вверх
      if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Скрываем header при скролле вниз
      } else {
        setIsVisible(true); // Показываем header при скролле вверх
      }
      prevScrollY.current = currentScrollY;

      // Меняем фон header при скролле
      setIsScrolled(currentScrollY > 50);

      // Определяем активную секцию
      const sections = ["about", "portfolio", "services"];
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Если прокрутили в самый верх
      if (currentScrollY === 0) {
        setActiveSection("about");
        return;
      }

      // Если прокрутили в самый низ
      if (currentScrollY + windowHeight >= documentHeight - 100) {
        setActiveSection("contact");
        return;
      }

      // Проверяем остальные секции
      let newActiveSection = activeSection;
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            newActiveSection = section;
          }
        }
      });

      // Обновляем активный раздел, если он изменился
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <header
      className={`header ${isScrolled ? "scrolled" : ""} ${
        isVisible ? "visible" : "hidden"
      }`}
    >

    <div class="logo">
      <img src="/page/cheef.svg" alt="Логотип" width="40" height="40" />
    </div>

      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <button
              className={`nav-link ${activeSection === "about" ? "active" : ""}`}
              onClick={() => handleClick("about")}
            >
              Обо мне
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeSection === "services" ? "active" : ""
              }`}
              onClick={() => handleClick("services")}
            >
              Услуги
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeSection === "portfolio" ? "active" : ""
              }`}
              onClick={() => handleClick("portfolio")}
            >
              Портфолио
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;