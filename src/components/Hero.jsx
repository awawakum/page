const styles = {
  // Стили для основного контейнера
  mainContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'black',
    zIndex: 1,
    width: '90%',
    maxWidth: '800px',
    padding: '0 20px',
    boxSizing: 'border-box',
  },

  // Стили для заголовка
  title: {
    fontSize: 'clamp(8rem, 8vw, 8rem)',
    fontWeight: 'bold',
    margin: 0,
    marginTop: 30,
    lineHeight: 1.2,
    fontFamily: 'Arial, sans-serif',
    overflowWrap: 'break-word',
    wordBreak: 'break-word',
  },

  // Стили для подписи
  subtitle: {
    fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
    margin: '1rem 0 0',
    fontFamily: 'Arial, sans-serif',
    opacity: 0.8,
    overflowWrap: 'break-word',
    wordBreak: 'break-word',
  },

  // Стили для кнопки
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    marginTop: '2rem',
    padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 4vw, 1.5rem)',
    fontSize: 'clamp(0.9rem, 3vw, 1rem)',
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'transparent',
    border: '2px solid black',
    borderRadius: '50px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    fontFamily: 'Arial, sans-serif',
    overflowWrap: 'break-word',
    wordBreak: 'break-word',
  },

  // Стили для раздела услуг
  servicesContainer: {
    position: 'relative',
    padding: '4rem 1rem',
    textAlign: 'center',
    color: 'black',
    zIndex: 1,
  },

  servicesTitle: {
    fontSize: 'clamp(2rem, 8vw, 4rem)',
    fontWeight: 'bold',
    marginBottom: '2rem',
    fontFamily: 'Arial, sans-serif',
    opacity: 0.9,
  },

  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },

  serviceCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '2rem',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },

  serviceCardTitle: {
    fontSize: 'clamp(1.5rem, 5vw, 2rem)',
    fontWeight: 'bold',
    marginBottom: '1rem',
    fontFamily: 'Arial, sans-serif',
    opacity: 0.9,
  },

  serviceCardDescription: {
    fontSize: 'clamp(0.9rem, 3vw, 1rem)',
    opacity: 0.8,
    fontFamily: 'Arial, sans-serif',
    marginBottom: '1.5rem',
  },

  techTag: {
    padding: '0.5rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    fontSize: '0.9rem',
  },

  // Стили для дополнительного контента
  additionalContent: {
    position: 'relative',
    zIndex: 1,
    padding: '20px',
    marginTop: '80vh',
    alignSelf: 'center',
  },
};

const Hero = () => {
  return (
    <div id="mainpart">
      <div style={styles.mainContainer} id="about">
        {/* Название проекта */}
        <h1 style={styles.title}>AWE_CODE</h1>

        {/* Подпись */}
        <p style={styles.subtitle}>Лучшие IT решения</p>

        {/* Кнопка для связи в Telegram */}
        <a
          href="https://t.me/urlfvck"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
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

      {/* Дополнительный контент для прокрутки */}
      <div style={styles.additionalContent}>
        <div id="services" style={styles.servicesContainer}>
          <h2 style={styles.servicesTitle}>Услуги</h2>
          <div style={styles.servicesGrid}>
            {/* Проект 1 */}
            <div style={styles.serviceCard}>
              <h3 style={styles.serviceCardTitle}>
                Разработка ПО любой сложности
              </h3>
              <p style={styles.serviceCardDescription}>
                Нужно создать парсер, который будет интегрирован с Web и Telegram? Или Вам необходимо необычное API под Ваши задачи? Создадим Ваше уникальное решение, учитывая все Ваши запросы по ТЗ.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                <span style={styles.techTag}>Python</span>
                <span style={styles.techTag}>Golang</span>
                <span style={styles.techTag}>JS</span>
                <span style={styles.techTag}>C++</span>
              </div>
            </div>

            {/* Проект 2 */}
            <div style={styles.serviceCard}>
              <h3 style={styles.serviceCardTitle}>Доработка. Внедрение решений в готовые проекты. Project Management.</h3>
              <p style={styles.serviceCardDescription}>
                Внедрение необходимых функций, обновление существующего функционала, рефакторинг. Консультации по вопросам IT. Курирование проектов. Имеем множество работающих активных кейсов.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                <span style={styles.techTag}>Bots</span>
                <span style={styles.techTag}>WEB</span>
                <span style={styles.techTag}>API</span>
                <span style={styles.techTag}>Desktop</span>
              </div>
            </div>

            {/* Проект 3 */}
            <div style={styles.serviceCard}>
              <h3 style={styles.serviceCardTitle}>DEVSECOPS</h3>
              <p style={styles.serviceCardDescription}>
                Внедрение инструментов для обеспечения безопасности и администрирования инфраструктуры. Развертывание. Управление базами данных. Анализ рисков.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                <span style={styles.techTag}>VPS</span>
                <span style={styles.techTag}>Docker</span>
                <span style={styles.techTag}>Risk Analysis</span>
                <span style={styles.techTag}>VDS</span>
                <span style={styles.techTag}>Data Bases</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;