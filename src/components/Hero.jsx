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

      
      <div id="services" style={{
        position: 'relative',
        padding: '4rem 1rem',
        marginTop: '80vh',
        textAlign: 'center',
        color: 'black',
        zIndex: 1,
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 8vw, 4rem)',
          fontWeight: 'bold',
          marginBottom: '2rem',
          fontFamily: 'Arial, sans-serif',
          opacity: 0.9,
        }}>
          Наши услуги
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          padding: '0 1rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Прозрачный фон
            backdropFilter: 'blur(10px)', // Размытие фона
            padding: '2rem',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.2)', // Легкая граница
          }}>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 5vw, 2rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              fontFamily: 'Arial, sans-serif',
              opacity: 0.9,
            }}>
              Веб-разработка
            </h3>
            <p style={{
              fontSize: 'clamp(0.9rem, 3vw, 1rem)',
              opacity: 0.8,
              fontFamily: 'Arial, sans-serif',
            }}>
              Создание современных и адаптивных веб-сайтов.
            </p>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 5vw, 2rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              fontFamily: 'Arial, sans-serif',
              opacity: 0.9,
            }}>
              Боты для социальных сетей и мессенджеров
            </h3>
            <p style={{
              fontSize: 'clamp(0.9rem, 3vw, 1rem)',
              opacity: 0.8,
              fontFamily: 'Arial, sans-serif',
            }}>
              Разработка решений любой сложности по Вашему запросу.
            </p>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}>
          <h3 style={{
            fontSize: 'clamp(1.5rem, 5vw, 2rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            fontFamily: 'Arial, sans-serif',
            opacity: 0.9,
          }}>
            UI/UX дизайн
          </h3>
          <p style={{
            fontSize: 'clamp(0.9rem, 3vw, 1rem)',
            opacity: 0.8,
            fontFamily: 'Arial, sans-serif',
          }}>
            Создание интуитивно понятных и привлекательных интерфейсов.
          </p>
        </div>
        </div>
      </div>

          {/* Дополнительный контент для прокрутки */}
        <div style={{ position: 'relative', zIndex: 1, padding: '20px',alignSelf: 'center'}}>
        <div id="portfolio" style={{
  position: 'relative',
  padding: '4rem 1rem',
  textAlign: 'center',
  color: 'black',
  zIndex: 1,
}}>
  <h2 style={{
    fontSize: 'clamp(2rem, 8vw, 4rem)',
    fontWeight: 'bold',
    marginBottom: '2rem',
    fontFamily: 'Arial, sans-serif',
    opacity: 0.9,
  }}>
    Портфолио
  </h2>
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  }}>
    {/* Проект 1 */}
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '2rem',
      borderRadius: '10px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    }}>
      <h3 style={{
        fontSize: 'clamp(1.5rem, 5vw, 2rem)',
        fontWeight: 'bold',
        marginBottom: '1rem',
        fontFamily: 'Arial, sans-serif',
        opacity: 0.9,
      }}>
        Разработка программных продуктов любой сложности
      </h3>
      <p style={{
        fontSize: 'clamp(0.9rem, 3vw, 1rem)',
        opacity: 0.8,
        fontFamily: 'Arial, sans-serif',
        marginBottom: '1.5rem',
      }}>
        Нужно создать парсер, который будет интегрирован с Web и Telegram? Или Вам необходимо необычное API под Ваши задачи? Создадим Ваше уникальное решение, учитывая все Ваши запросы по ТЗ.
      </p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        justifyContent: 'center',
      }}>
        <span style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          fontSize: '0.9rem',
        }}>Python</span>
        <span style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          fontSize: '0.9rem',
        }}>Golang</span>
        <span style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          fontSize: '0.9rem',
        }}>JS</span>
        <span style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          fontSize: '0.9rem',
        }}>C++</span>
      </div>
    </div>

    {/* Проект 2 */}
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '2rem',
      borderRadius: '10px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    }}>
      <h3 style={{
        fontSize: 'clamp(1.5rem, 5vw, 2rem)',
        fontWeight: 'bold',
        marginBottom: '1rem',
        fontFamily: 'Arial, sans-serif',
        opacity: 0.9,
      }}>
        Внедрение решений в ваши проекты
      </h3>
      <p style={{
        fontSize: 'clamp(0.9rem, 3vw, 1rem)',
        opacity: 0.8,
        fontFamily: 'Arial, sans-serif',
        marginBottom: '1.5rem',
      }}>
        Внедрение необходимых фукнций, обновление существующего фукнционала.
      </p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        justifyContent: 'center',
      }}>
        <span style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          fontSize: '0.9rem',
        }}>Боты</span>
        <span style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          fontSize: '0.9rem',
        }}>WEB</span>
        <span style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          fontSize: '0.9rem',
        }}>Безопасность</span>
      </div>
    </div>

    {/* Проект 3 */}
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '2rem',
      borderRadius: '10px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    }}>
      <h3 style={{
        fontSize: 'clamp(1.5rem, 5vw, 2rem)',
        fontWeight: 'bold',
        marginBottom: '1rem',
        fontFamily: 'Arial, sans-serif',
        opacity: 0.9,
      }}>
        Безопасность и инфраструктура
      </h3>
      <p style={{
        fontSize: 'clamp(0.9rem, 3vw, 1rem)',
        opacity: 0.8,
        fontFamily: 'Arial, sans-serif',
        marginBottom: '1.5rem',
      }}>
        Внедрение инструментов для обеспечения безопасности и администрирования инфраструктуры.
      </p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        justifyContent: 'center',
      }}>
        <span style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          fontSize: '0.9rem',
        }}>Docker</span>
        <span style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          fontSize: '0.9rem',
        }}>VPS</span>
      </div>
    </div>
  </div>
</div>
        </div>

      </div>
      

  );
};

export default Hero;