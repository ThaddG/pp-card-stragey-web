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
export const Header = styled.h2`
  background-color: tomato;
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
  `
  // background-color: skyblue;
            /**
             * --------------------------------------
             *            STACK PREVIEW
             * --------------------------------------
             */
export const StackPreview = styled.div`
  background-color: lightgreen;
  flex-basis: 75%;
`
            /**
             * --------------------------------------
             *            CARDS DISPLAY
             * --------------------------------------
             */
export const CardsDisplay = styled.div`
  background-color: lightgray;
  flex-basis: 25%;

  padding: .75rem;
  height: 600px;
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