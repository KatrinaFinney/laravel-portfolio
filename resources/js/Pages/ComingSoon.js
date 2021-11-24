import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
} from "semantic-ui-react";

const { AvatarImage } = () => <Image src="/assets/images/katrina.png" />;

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
});

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
    <Container text>
        <Header
            as="h1"
            content="HI THERE."
            inverted
            style={{
                fontSize: mobile ? "2em" : "4em",
                fontWeight: "normal",
                marginBottom: 0,
                marginTop: mobile ? "1.5em" : "3em",
            }}
        />
        <Header
            as="h2"
            content="Welcome! Awesome portfolio coming soon."
            inverted
            style={{
                fontSize: mobile ? "1.5em" : "1.7em",
                fontWeight: "normal",
                marginTop: mobile ? "0.5em" : "1.5em",
            }}
        />
    </Container>
);

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
};
/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {};

    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    render() {
        const { children } = this.props;
        const { fixed } = this.state;

        return (
            <Media greaterThan="mobile">
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign="center"
                        style={{ minHeight: 700, padding: "1em 0em" }}
                        vertical
                    >
                        <HomepageHeading />
                    </Segment>
                </Visibility>

                {children}
            </Media>
        );
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
};

class MobileContainer extends Component {
    state = {};

    handleSidebarHide = () => this.setState({ sidebarOpened: false });

    handleToggle = () => this.setState({ sidebarOpened: true });

    render() {
        const { children } = this.props;
        const { sidebarOpened } = this.state;

        return (
            <Media as={Sidebar.Pushable} at="mobile">
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation="overlay"
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={sidebarOpened}
                    >
                        <Menu.Item as="a" active>
                            Home
                        </Menu.Item>
                        <Menu.Item as="a">Projects</Menu.Item>
                        <Menu.Item as="a">Contact</Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={sidebarOpened}>
                        <Segment
                            inverted
                            textAlign="center"
                            style={{ minHeight: 350, padding: "1em 0em" }}
                            vertical
                        >
                            <HomepageHeading mobile />
                        </Segment>

                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Media>
        );
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
    /* Heads up!
     * For large applications it may not be best option to put all page into these containers at
     * they will be rendered twice for SSR.
     */
    <MediaContextProvider>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
};

const HomepageLayout = () => (
    <ResponsiveContainer>
        <Segment inverted vertical style={{ padding: "5em 0em" }}>
            <Container>
                <Grid inverted stackable>
                    <h5>
                        Made with Laravel, Inertia.Js, React,Js, Semantic UI,
                        and love.
                    </h5>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer>
);

export default HomepageLayout;
