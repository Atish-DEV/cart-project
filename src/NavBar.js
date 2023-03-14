import React from 'react';

const NavBar = (props) => {
  return (
    <div style={styles.nav}>
      <h2>Cart Project</h2>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="cart-icon" />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};


export default NavBar;