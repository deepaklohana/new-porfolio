import React, { useState } from 'react';
import Container from '../Container';
import Avatar from '../../assets/images/profile.png';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';


const Navbar = () => {
  const navItems = [
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Contact', href: '/contact' },
    { title: 'Blog', href: '/blog' },
  ];

  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  const openHomePage = () => {
    navigate('/');
  };

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container className={''}>
      <motion.nav
        style={{
          borderRadius: scrolled ? '100px' : '0px',
          padding: scrolled ? ' 8px 12px' : '8px 12px ',
        }}
        animate={{
          boxShadow: scrolled ? 'var(--shadow-own)' : 'none',
          width: scrolled ? '56rem' : '68rem',
          y: scrolled ? 10 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed inset-x-0 top-0 z-10 mx-auto flex items-center justify-between bg-white/90"
      >
        <img
          onClick={openHomePage}
          className="h-10 w-10 rounded-full bg-neutral-700 px-1"
          src={Avatar}
          alt="Profile Avatar"
        />
        <div className="flex items-center">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="relative px-2 py-1 text-sm"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};

export default Navbar;
