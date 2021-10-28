import styled from 'styled-components'

/**
 * --------------------------------------
 *            FLEXBOX ATTEMPT
 * --------------------------------------
 */
    /**
     * --------------------------------------
     *            CREATE STACK LAYOUT
     * --------------------------------------
     */
export const CreateStackLayout = styled.div`
  display: flex;
  flex-direction: column;
`
        /**
         * --------------------------------------
         *            HEADER
         * --------------------------------------
         */
export const Header = styled.div`
  height: 5vh;
  display: flex;
  align-items: center;
  padding-left: 1vw;
`
        /**
         * --------------------------------------------------------
         *            PREVIEW AND CARD DISPLAY CONTAINER
         * --------------------------------------------------------
         */
export const PreviewAndCardDisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: .75rem;
  align-self: center;

  width: 98vw;
  height: 60vh;
  `
  // background-color: skyblue;
            /**
             * --------------------------------------
             *            STACK PREVIEW
             * --------------------------------------
             */
            // flex-basis: 75%;
export const StackPreview = styled.div`
  background-color: #8be8cb;
  width: 75%;
  padding: .5rem;
  border-radius: .5rem;

  display: flex;
  gap: .75rem;
  flex-wrap: wrap;
  
  overflow-y: scroll;
`
            /**
             * --------------------------------------
             *            CARDS DISPLAY
             * --------------------------------------
             */
export const CardsDisplay = styled.div`
  background-color: #1c77c3;
  flex-basis: 25%;

  color: #fff;

  padding: .75rem;
  overflow-y: scroll;
`


/**
 * --------------------------------------
 *            GRID ATTEMPT
 * --------------------------------------
 */

// // Grid layout
// export const CreateStackLayout = styled.div`
//   display: grid;
//   grid-template-columns: 200px 200px 100px;
//   grid-template-rows: auto;
//   grid-tempate-area:
//     "header header header"
//     "stack-preview stack-preview cards"
//     "stack-preview stack-preview cards"
//     "stack-details stack-details cards";
// `

// // grid-area: header;
// export const Header = styled.div`
// `

// // stack preview
// export const StackPreview = styled.div`
//   grid-area: stack-preview;
//   background-color: tomato;
// `

// export const CardsDisplay = styled.div`
//   grid-area: cards;
// `