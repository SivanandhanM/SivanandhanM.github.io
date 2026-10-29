import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * Reusable Button component.
 *
 * Props:
 *   children  – label / content
 *   href      – renders <a> when provided
 *   onClick   – click handler for <button>
 *   variant   – 'primary' | 'ghost'
 *   size      – '' | 'sm'
 *   className – additional classes
 *   disabled  – disables the button
 *   external  – adds target="_blank" when href is set
 */
const Button = ({
  children,
  href,
  onClick,
  variant   = 'primary',
  size      = '',
  className = '',
  disabled  = false,
  external  = false,
  ...rest
}) => {
  const classes = ['btn', `btn-${variant}`, size ? `btn-${size}` : '', className]
    .filter(Boolean)
    .join(' ');

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.04 },
    whileTap:   { scale: disabled ? 1 : 0.97 },
    transition: { type: 'spring', stiffness: 380, damping: 18 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-disabled={disabled}
        {...motionProps}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  children:  PropTypes.node.isRequired,
  href:      PropTypes.string,
  onClick:   PropTypes.func,
  variant:   PropTypes.oneOf(['primary', 'ghost']),
  size:      PropTypes.oneOf(['', 'sm']),
  className: PropTypes.string,
  disabled:  PropTypes.bool,
  external:  PropTypes.bool,
};

export default Button;
