import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${({ theme }) => css`
  html {
    height: 100%;

    body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto Slab', serif;
      width: 100%;
      height: 100vh;

      #root {
        background: ${theme.colors.background};
        color: ${theme.colors.black};
      }
    }
  }

  // Button styles
  button {
    background: none;
    border: none;
    outline: none;

    &:hover {
      cursor: pointer;
    }

    &.btn {
      height: 56px;
      color: white;
      font-size: 22px;
      padding: 16px 26px;
      background-color: ${theme.colors.btn};
      transition: 0.2s;
      position: relative;
      margin-left: 16px;

      &:hover {
        background-color: ${theme.colors.btnHover};
        transition: 0.2s;
      }

      &:hover::before {
        transition: 0.2s;
        border-right-color: ${theme.colors.btnHover};
      }

      &:hover::after {
        transition: 0.2s;
        border-left-color: ${theme.colors.btnHover};
      }

      &::before,
      &::after {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
      }

      &::before {
        left: -16px;
        top: 0;
        border-top: 28px solid transparent;
        border-right: 16px solid ${theme.colors.btn};
        border-bottom: 28px solid transparent;
        transition: 0.2s;
      }

      &::after {
        right: -16px;
        top: 0;
        border-top: 28px solid transparent;
        border-left: 16px solid ${theme.colors.btn};
        border-bottom: 28px solid transparent;
        transition: 0.2s;
      }
    }
  }
  // Button styles end

  // Board styles
  .board {
    display: inline-block;
    width: 400px;

    @media screen and (max-width: 1060px) {
      width: 80vh;
      height: 80vh;
    }

    @media screen and (max-width: 774px) {
      width: 100%;
      height: 100%;
    }

    .board-row {
      display: flex;
      flex-direction: row;
      border-bottom: 4px solid ${theme.colors.lightGray};

      &:last-child {
        border-bottom: none;
      }
    }

    .square {
      width: calc(9 * 15px);
      height: calc(9 * 15px);
      border-right: 4px solid ${theme.colors.lightGray};
      font-size: 6.5rem;
      padding: 0;
      overflow: hidden;
      transition: all 0.2s;

      @media screen and (max-width: 1060px) {
        width: calc(80vh / 3);
        height: calc(80vh / 3);
      }

      @media screen and (max-width: 774px) {
        width: calc(90vw / 3);
        height: calc(90vw / 3);
      }

      .X {
        &::before,
        &::after {
          background-color: ${theme.colors.x};
          border: 1px solid ${theme.colors.shadow};
          box-shadow: ${theme.colors.shadowSize} ${theme.colors.shadowSize} 0px 0px ${theme.colors.shadow};
        }
      }

      .O {
        background-color: ${theme.colors.o};
        border: 1px solid ${theme.colors.shadow};
        box-shadow: ${theme.colors.shadowSize} ${theme.colors.shadowSize} 0px 0px ${theme.colors.shadow};

        &::before {
          background-color: ${theme.colors.background};
          border: 1px solid ${theme.colors.shadow};
          box-shadow: inset ${theme.colors.shadowSize} ${theme.colors.shadowSize} 0px 0px ${theme.colors.shadow};
        }
      }
    }
  }
  // Board styles end

  // Status styles
  .status {
    width: 400px;
    display: flex;
    margin: 0 auto 20px;
    font-size: 24px;
    position: relative;
    font-weight: 700;

    @media screen and (max-width: 1060px) {
      width: 70%;
    }

    @media screen and (max-width: 774px) {
      width: 100%;
    }

    &__item {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .line {
        margin-top: 10px;
        width: 100%;
        height: 6px;
        background-color: ${theme.colors.x};
      }

      .bgX {
        background-color: ${theme.colors.x};
      }

      .bgO {
        background-color: ${theme.colors.o};
      }

      .not_active_bg {
        background-color: ${theme.colors.lightGray};
      }
    }

    .full {
      width: 100%;
    }

    .colorX {
      color: ${theme.colors.x};
    }

    .colorO {
      color: ${theme.colors.o};
    }

    .not_active_color {
      color: ${theme.colors.lightGray};
    }
  }
  // Status styles and

  // Switch
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    input {
      opacity: 0;
      width: 0;
      height: 0;

      &:checked + .slider {
        background: ${theme.colors.switch};
      }

      &:checked + .slider:before {
        transform: translateX(26px);
      }
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.colors.switch};
    transition: .4s;

    &:before {
      position: absolute;
      content: "";
      height: 22px;
      width: 22px;
      left: 6px;
      bottom: 6px;
      background-color: white;
      transition: .4s;
    }
  }

  .slider.round {
    border-radius: 34px;

    &:before {
      border-radius: 50%;
    }
  }

`}
`
