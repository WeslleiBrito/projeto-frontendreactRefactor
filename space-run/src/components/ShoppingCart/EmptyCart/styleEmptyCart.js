

export const ImageEmpty = (props) => {

    const styleImage = {
        height: '30vh',
        with: '30vh',
        display: 'flex',
        justifySelf: 'center',
        alignSelf: 'center',
        borderRadius: '0.5em'
    }

    return <img src={props.src} style={styleImage} alt="imagem de uma pessoa meditando" />
}