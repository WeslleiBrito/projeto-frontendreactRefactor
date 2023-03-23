

export const ImageMeditation = (props) => {

    const styleImage = {
        height: '80%',
        with: '80%',
        display: 'flex',
    }

    return <img src={props.src} style={styleImage} alt="imagem de uma pessoa meditando" />
}