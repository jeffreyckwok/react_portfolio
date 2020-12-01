import React from 'react';
import { SRLWrapper, useLightbox } from 'simple-react-lightbox';
import { Image } from 'react-bootstrap';

export default props => {
  const project = props;
  const { openLightbox } = useLightbox();

  const options = {
  buttons: {
    backgroundColor: '#1C7293',
    iconColor: '#e8eddf',
    iconPadding: '7px'
  },
  caption: {
    captionColor: '#e8eddf',
    captionFontSize: '30px'
  },
  settings: {
    overlayColor: 'rgba(6, 90, 130, 1)'
  },
  thumbnails: {
    thumbnailsAlignment: 'middle'
  }
}

  const callbacks = {
  onSlideChange: slide => console.log(slide),
  onLightboxOpened: current => console.log(current),
  onLightboxClosed: current => console.log(current),
  onCountSlides: total => console.log(total)
  }

  return (
    <>
    <a onClick={() => openLightbox()}>
    <div className="py-3 imgContainer" key={project.name}>
      <Image src={project.img} fluid/>
      <div className="my-3 mx-3 overlay text-center">
        <div className="text">
          <h3>{project.name}</h3>
          <h4>{project.technology}</h4>
        </div>
      </div>
    </div>
    </a>
    <SRLWrapper options={options} images={project.gallery} callbacks={callbacks} key={project.name}/>
    </>
  )
}
