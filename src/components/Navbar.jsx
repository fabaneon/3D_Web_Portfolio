import React, { useEffect, useState} from 'react';
import { Link} from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu ,close } from '../assets';

// $의 의미
// Jquery에서 일반적으로 구분하기 위해 #를 붙인다는 것이지
// #가 붙은게 JQuery를 사용했다는 의미는 아니다.

// $는 식별자에서 사용되는 달러 기호는 document.getElementById() 의 값이나
// document.querySelector()의 태그 값 혹은 아이디나 클래스처럼 한 개만 선언할 때,
// 단일변수를 표시하기 위해서 사용한다.

//약간 헝가리안 표기법 같은 너낌인가

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav 
      className={`${styles.paddingX} w-full flex 
      items-center py-5 fixed top-0 z-20 bg-primary`}
    >
        
      <div className="w-full flex justify-between
        items-center max-w-7xl mx-auto">
          <Link
              to="/"
              className="flex items-center gap-2"
              onClick={()=>{
                setActive("");
                window.scrollTo(0, 0);
          }}>
              <img src={logo} alt="logo" className="w-9
              h-9 object-contain"/> 
              <p className='text-white text-[18px] font-bold cursor-pointer'>
                FabaNeon  
                <span className='sm:block hidden'>
                   | JavaScript Study </span></p>
              <p className="text-red-500"> Welcome</p>
          </Link>
          <ul className='list-none hidden sm:flex 
          flex-row gap-10'>
            {navLinks.map((link)=>(
              //여기 위에 펑션 매개변수 prop에 . 찍어서 
              // 프롭.active라고 해야 먹힌다.
              // 여기선 link가 프롭명이니 link.active가 맞다.
              
              <li 
              key={link.id} 
                className={`${
                  // 시발 좆같은 코쟁이 새끼
                  // 그냥 active라고 쓰지마라 
                  active === link.title
                    ? "text-white"
                    : "text-secondary"
                } hover:text-white text-[18px]
                font-medium cursor-pointer`}
                onClick={()=>setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}

          </ul>


  <div className="sm:hidden flex flex-1
          justify-end items-center" //이건 모바일 UI
           >
           
            <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
            <div className={`${!toggle ? 'hidden' 
            : 'flex'} p-6 black-gradient absoulute
            top-20 right-0 mx-4 my-2 min-w[140px]
            z-10 rounded-xl`}>
              <ul className='list-none flex
              justify-end items-start flex-col gap-4'>
                {navLinks.map((link)=>(
                  <li 
                  key={link.id} 
                    className={`${
                      //--
                      active === link.title
                        ? "text-white"
                        : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={()=> {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
  
            </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar