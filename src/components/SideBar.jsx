import React from 'react';
import './styles/sidebar.css';
import Avatar from '../assets/GitAatar.jpg';
import SidebarSection from './SidebarSection';

const SideBar = () => {

    const sidebarSectionHeader = (header, items) => {
        return (
          <>
            <h1 className="sidebar-section-header">{header}</h1>
            <ul className="sidebar-section-list">
              {items.map((item, index) => (
                <li className="section-list-item" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </>
        );
      };
      
  return (
    <div className='document-sidebar'>
        <img src={Avatar} alt='candidate-portrait' className='sidebar-avatar'></img>
<SidebarSection content={sidebarSectionHeader(
    'Dane osobowe',
    [
  <>
     E-mail:
     <br />
     adam.wroblewski81@o2.pl
</>,
<>
     Telefon:
     <br />
     609 554 547
</>
    ]
)}/>
<SidebarSection content={sidebarSectionHeader(
    'Umiejętności',
    [
        'Zorientowanie na cel i ustalanie priorytetów',
        'Zdolność do rozwiązywania problemów',
        'Wiedza techniczna',
        'Łatwość zdobywania informacji',
        'Zdolność do analitycznego myślenia',
        'Komunikatywność',
        'Umiejętność pracy w zespole',
        'Bezkonfliktowość'
    ]
)}/>
<SidebarSection content={sidebarSectionHeader(
    'Języki',
    ['angielski  B1']
)}/>

<SidebarSection content={sidebarSectionHeader(
    'Zainteresowania',
    [
        'Optymalizacje w codziennym życiu',
        'Prepping',
        'Programowanie',
        'Strzelectwo',
        'Motocykle'
    ]
)}/>

    </div>
  )
}

export default SideBar