const CreateOutfit = () => {
    const images = [
        'https://picsum.photos/200',
        'https://picsum.photos/200', 'https://picsum.photos/200',
        'https://picsum.photos/200', 'https://picsum.photos/200',
        'https://picsum.photos/200', 'https://picsum.photos/200',
        'https://picsum.photos/200', 'https://picsum.photos/200',
        'https://picsum.photos/200', 'https://picsum.photos/200',
        'https://picsum.photos/200', 'https://picsum.photos/200',
        'https://picsum.photos/200', 'https://picsum.photos/200',
        'https://picsum.photos/200', 'https://picsum.photos/200',
        'https://picsum.photos/200', 'https://picsum.photos/200',
        'https://picsum.photos/200', 'https://picsum.photos/200',
        'https://picsum.photos/200', 'https://picsum.photos/200',
        'https://picsum.photos/200', 'https://picsum.photos/200',
        'https://picsum.photos/200', 'https://picsum.photos/200',
        'https://picsum.photos/200', 'https://picsum.photos/200',
        'https://picsum.photos/200',

        // ... Your image URLs ...
    ].map(s => ({
        top: s,
        middle: s,
        bottom: s
    }));

    const rowStyle = {
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto', // Enable horizontal scrolling
        height: '100%', // Set the height to enable scroll bars (adjust as needed)
        margin: '10px 0' // Adjust margin as needed
    };

    const parentStyle = {
        overflowX: 'hidden', // Hide horizontal scrollbar

    }

    const containerStyle = {
        width: '70%', // Set the width to 70% of the parent container
        margin: '0 auto', // Center the container horizontally
        marginLeft: '1%', // Adjust the left margin as needed
    };



    return (
        <div className="scrollable-section-container" style={parentStyle}>
            <div className="scrollable-section" style={containerStyle}>
                <div style={rowStyle} className="row">
                    {images.map((image, index) => (
                        <div key={index} className="section-column">
                            <img src={image.top} alt={`Top ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="scrollable-section" style={containerStyle}>
                <div style={rowStyle} className="row">
                    {images.map((image, index) => (
                        <div key={index} className="section-column">
                            <img src={image.middle} alt={`middle ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="scrollable-section" style={containerStyle}>
                <div style={rowStyle} className="row">
                    {images.map((image, index) => (
                        <div key={index} className="section-column">
                            <img src={image.bottom} alt={`bottom ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreateOutfit;
