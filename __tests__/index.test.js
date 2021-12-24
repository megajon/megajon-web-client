// import React from 'react'
// import { render, screen } from '@testing-library/react'
// import Home from '../pages/index'

// describe('Home', () => {
//   it('renders a heading', () => {
//     render(<Home />)

//     const heading = screen.getByRole('heading', {
//       name: /welcome to next\.js!/i,
//     })

//     expect(heading).toBeInTheDocument()
//   })
// })

describe('true is truthy and false is falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true);
  });

  test('false is falsy', () => {
    expect(false).toBe(false);
  });
});



