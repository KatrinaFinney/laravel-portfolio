import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import { Component } from 'react'
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
} from 'semantic-ui-react'
import React from 'react'
import ProjectLayout from '@/Layouts/ProjectLayout';


export default function ProjectComponent(props) {

  return (

        <ProjectLayout>
        {props.projects.map(project => (
            <div>
<Segment style={{ padding: '8em 0em' }} vertical>
<Container text>
  <Header as='h3' style={{ fontSize: '2em' }}>
  {project.title}
  </Header>
  <p style={{ fontSize: '1.33em' }}>
  {project.description}
  </p>
  <Button as='a' size='large'>
    Built with {project.language}
  </Button>

  <Divider
    as='h4'
    className='header'
    horizontal
    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
  >
    <a href='#'></a>

  </Divider>
</Container>
</Segment>
</div>
))}
</ProjectLayout>


  )}
