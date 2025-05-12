
import './styles/mainPart.css';
import { Typography, Divider } from '@mui/material';

const MainPart = () => {

    const dividerStyle = {
            background:'var(--persian-green)',
            height:'3px',
            mt:'8px',
            mb:'8px'   
    }

    const typographyStyle = {
          textAlign:'justify',
    }

  return (
    <article className='main-part'>
        <section className='main-part-header'>
            <h1>Adam Wróblewski</h1>
            <h4>Junior Frontend-developer</h4>
        </section>
        <section className='main-part-section'>
            <h2 className="section-title">
                Podsumowanie zawodowe
            </h2>
            <Divider variant='fullWidth' sx={dividerStyle}/>
            <Typography sx={typographyStyle}>
            Jestem początkującym programistą frontendowym aplikacji webowych, wprawdzie bez doświadczenia komercyjnego w programowaniu, ale z doświadczeniem życiowym i jasno postawionym celem. Programowaniem zajmuję się hobbystycznie od ok. 3 lat, a najciekawsze moim zdaniem projekty zamieściłem w portfolio.
            </Typography>
        </section>
        <section className='main-part-section'>
            <h2 className="section-title">Doświadczenie</h2>
            <Divider variant='fullWidth' sx={dividerStyle}/>
            <h4>Od 05.2014 - nadal</h4>  
            <h4>Doradca techniczny | Castorama Polska</h4> 
            <Typography sx={typographyStyle}>
            <ul className="section-list">Zakres obowiązków:
                <li>Rozpoznanie potrzeb klientów i doradztwo produktowe.</li>
                <li>Rozwiązywanie powstających na bieżąco sytuacji</li>
                <li>Logistyka obrotu towarem w obrębie sektora</li>
            </ul> 
            </Typography>
            <Divider sx={{m:'8px 0'}}/>
            <h4>2002 - 2014</h4>  
            <h4>Pracownik ogólnobudowlany</h4>
            <Typography>
                <ul className="section-list">
                    <li>Kompleksowe remonty mieszkań</li>
                </ul>
            </Typography>
        </section>
        <section className='main-part-section'>
            <h2 className="section-title">Wykształcenie</h2>
            <Divider sx={dividerStyle} />
            <h4>10.2000 - 6.2005 &nbsp;&nbsp;  | &nbsp;&nbsp;   Politechnika Białostocka</h4>
            <h4>Maszyny i Urządzenia Przemysłu Spożywczego</h4>
            <Divider sx={{m:'8px 0'}}/>
            <h4>9.1996 - 6.2000 &nbsp;&nbsp;|&nbsp;&nbsp; VI L.O. w Białymstoku</h4>
        </section>
        <section className="main-part-section">
            <Typography sx={{
                fontSize:'8px'
            }}>
                Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).
            </Typography>

        </section>
    </article>
  )
}

export default MainPart