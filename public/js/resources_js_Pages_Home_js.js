"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Home_js"],{

/***/ "./resources/js/Pages/Home.js":
/*!************************************!*\
  !*** ./resources/js/Pages/Home.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// import { createMedia } from '@artsy/fresnel'
// import PropTypes from 'prop-types'
// import { Component } from 'react'
// import {
//   Button,
//   Container,
//   Divider,
//   Grid,
//   Header,
//   Icon,
//   Image,
//   List,
//   Menu,
//   Segment,
//   Sidebar,
//   Visibility,
// } from 'semantic-ui-react'
// import { usePage } from '@inertiajs/inertia-react'
// const { AvatarImage } = () => (
//     <Image src='/assets/images/katrina.png' />
//   )
// const { MediaContextProvider, Media } = createMedia({
//   breakpoints: {
//     mobile: 0,
//     tablet: 768,
//     computer: 1024,
//   },
// })
// /* Heads up!
//  * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
//  * components for such things.
//  */
// const HomepageHeading = ({ mobile }) => (
//   <Container text>
//     <Header
//       as='h1'
//       content='Katrina Finney'
//       inverted
//       style={{
//         fontSize: mobile ? '2em' : '4em',
//         fontWeight: 'normal',
//         marginBottom: 0,
//         marginTop: mobile ? '1.5em' : '3em',
//       }}
//     />
//     <Header
//       as='h2'
//       content='Web Application Developer'
//       inverted
//       style={{
//         fontSize: mobile ? '1.5em' : '1.7em',
//         fontWeight: 'normal',
//         marginTop: mobile ? '0.5em' : '1.5em',
//       }}
//     />
//     <Image avatar src='/Users/katrinafinney/katrina-portfolio/resources/assets/images/katrina.png'/>
//   </Container>
// )
// HomepageHeading.propTypes = {
//   mobile: PropTypes.bool,
// }
// /* Heads up!
//  * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
//  * It can be more complicated, but you can create really flexible markup.
//  */
// class DesktopContainer extends Component {
//   state = {}
//   hideFixedMenu = () => this.setState({ fixed: false })
//   showFixedMenu = () => this.setState({ fixed: true })
//   render() {
//     const { children } = this.props
//     const { fixed } = this.state
//     return (
//       <Media greaterThan='mobile'>
//         <Visibility
//           once={false}
//           onBottomPassed={this.showFixedMenu}
//           onBottomPassedReverse={this.hideFixedMenu}
//         >
//           <Segment
//             inverted
//             textAlign='center'
//             style={{ minHeight: 700, padding: '1em 0em' }}
//             vertical
//           >
//             <Menu
//               fixed={fixed ? 'top' : null}
//               inverted={!fixed}
//               pointing={!fixed}
//               secondary={!fixed}
//               size='large'
//             >
//               <Container>
//                 <Menu.Item as='a' active>
//                   Home
//                 </Menu.Item>
//                 <Menu.Item as='a'>Projects</Menu.Item>
//                 <Menu.Item as='a'>Contact</Menu.Item>
//               </Container>
//             </Menu>
//             <HomepageHeading />
//           </Segment>
//         </Visibility>
//         {children}
//       </Media>
//     )
//   }
// }
// DesktopContainer.propTypes = {
//   children: PropTypes.node,
// }
// class MobileContainer extends Component {
//   state = {}
//   handleSidebarHide = () => this.setState({ sidebarOpened: false })
//   handleToggle = () => this.setState({ sidebarOpened: true })
//   render() {
//     const { children } = this.props
//     const { sidebarOpened } = this.state
//     return (
//       <Media as={Sidebar.Pushable} at='mobile'>
//         <Sidebar.Pushable>
//           <Sidebar
//             as={Menu}
//             animation='overlay'
//             inverted
//             onHide={this.handleSidebarHide}
//             vertical
//             visible={sidebarOpened}
//           >
//             <Menu.Item as='a' active>
//               Home
//             </Menu.Item>
//             <Menu.Item as='a'>Projects</Menu.Item>
//             <Menu.Item as='a'>Contact</Menu.Item>
//           </Sidebar>
//           <Sidebar.Pusher dimmed={sidebarOpened}>
//             <Segment
//               inverted
//               textAlign='center'
//               style={{ minHeight: 350, padding: '1em 0em' }}
//               vertical
//             >
//               <HomepageHeading mobile />
//             </Segment>
//             {children}
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </Media>
//     )
//   }
// }
// MobileContainer.propTypes = {
//   children: PropTypes.node,
// }
// const ResponsiveContainer = ({ children }) => (
//   /* Heads up!
//    * For large applications it may not be best option to put all page into these containers at
//    * they will be rendered twice for SSR.
//    */
//   <MediaContextProvider>
//     <DesktopContainer>{children}</DesktopContainer>
//     <MobileContainer>{children}</MobileContainer>
//   </MediaContextProvider>
// )
// ResponsiveContainer.propTypes = {
//   children: PropTypes.node,
// }
// export default function ProjectLayout({ children }) {
//     const { project } = usePage().props
//     return (
//       <main>
//         <header>
//           {props.project.title}
//         </header>
//         <content>
//           {children}
//         </content>
//       </main>
//     )
//   }
// const HomepageLayout = (props) => (
//   <ResponsiveContainer>
//     <Segment style={{ padding: '8em 0em' }} vertical>
//       <Grid container stackable verticalAlign='middle'>
//         <Grid.Row>
//           <Grid.Column width={8}>
//             <Header as='h3' style={{ fontSize: '2em' }}>
//               I provide elegant development solutions.
//             </Header>
//             <p style={{ fontSize: '1.33em' }}>
//               My passion is learning new programming languages, and building amazing things with them.
//             </p>
//             <Header as='h3' style={{ fontSize: '2em' }}>
//               Empathy drives me forward.
//             </Header>
//             <p style={{ fontSize: '1.33em' }}>
//                I love solving problems for my clients!
//             </p>
//           </Grid.Column>
//           <Grid.Column floated='right' width={6}>
//             <Image bordered rounded size='large' src='/images/katrina.png' />
//           </Grid.Column>
//         </Grid.Row>
//         <Grid.Row>
//           <Grid.Column textAlign='left'>
//             <Button size='large'>View My Github</Button>
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </Segment>
//     <Divider
//           as='h4'
//           className='header'
//           horizontal
//           style={{ margin: '3em 0em', textTransform: 'uppercase' }}
//         >
//           <a href='#'>Projects</a>
//         </Divider>
//     <Segment style={{ padding: '8em 0em' }} vertical>
//       <Container text>
//         <Header as='h3' style={{ fontSize: '2em' }}>
//          {props.project.title}
//         </Header>
//         <p style={{ fontSize: '1.33em' }}>
//           Aute Lorem dolor occaecat fugiat.Incididunt dolore anim officia sint ut officia magna laboris. Magna id pariatur tempor fugiat do laboris. Eiusmod voluptate nisi velit dolore. Reprehenderit amet aute qui minim sit sint ex non voluptate proident esse adipisicing. Tempor veniam Lorem cillum quis reprehenderit elit. Pariatur Lorem laborum exercitation excepteur. Cillum consequat amet ex officia culpa quis anim ut.
//         </p>
//         <Button as='a' size='large'>
//           Built with
//         </Button>
//         <Divider
//           as='h4'
//           className='header'
//           horizontal
//           style={{ margin: '3em 0em', textTransform: 'uppercase' }}
//         >
//           <a href='#'></a>
//         </Divider>
//         <Header as='h3' style={{ fontSize: '2em' }}>
//           Test Project 2
//         </Header>
//         <p style={{ fontSize: '1.33em' }}>
//           Lorem non irure deserunt sit duis duis aute tempor excepteur magna. Et elit ullamco nulla duis tempor irure sint esse. Nulla ex in aute aliqua nostrud consequat anim. Velit tempor est excepteur consequat quis pariatur nulla nulla est occaecat occaecat. Aliquip magna do sit sunt dolore. Esse laboris adipisicing reprehenderit mollit incididunt adipisicing.
//         </p>
//         <Button as='a' size='large'>
//           Built with
//         </Button>
//       </Container>
//     </Segment>
//     <Segment style={{ padding: '0em' }} vertical>
//       <Grid celled='internally' columns='equal' stackable>
//         <Grid.Row textAlign='center'>
//           <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
//             <Header as='h3' style={{ fontSize: '2em' }}>
//               Kirschbaum Placeholder
//             </Header>
//             <p style={{ fontSize: '1.33em' }}>"Laborum qui duis officia dolore fugiat esse dolore sunt sint irure pariatur."</p>
//           </Grid.Column>
//           <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
//             <Header as='h3' style={{ fontSize: '2em' }}>
//               Larabelles Placeholder
//             </Header>
//             <p style={{ fontSize: '1.33em' }}>"Laborum qui duis officia dolore fugiat esse dolore sunt sint irure pariatur."</p>
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </Segment>
//     <Segment inverted vertical style={{ padding: '5em 0em' }}>
//       <Container>
//         <Grid inverted stackable>
//               <h5>
//                 Made with Laravel, Inertia.Js, React,Js, Semantic UI, and love.
//               </h5>
//         </Grid>
//       </Container>
//     </Segment>
//   </ResponsiveContainer>
// )
// export default HomepageLayout



function Layout(_ref) {
  var children = _ref.children;
  var projects = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.usePage)().props.projects;
  console.log(projects);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("main", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("header", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("content", {
      children: children
    })]
  });
}

/***/ })

}]);