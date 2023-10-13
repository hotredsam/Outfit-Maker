import ScrollableSection from "../components/ScrollableSection";

const Dashboard = () => {
    const images = [
        'https://picsum.photos/200',
        'https://picsum.photos/200',
        'https://picsum.photos/200',
        'https://picsum.photos/200',
        'https://picsum.photos/200',
        'https://picsum.photos/200',
    ].map(s => ({
        top: s,
        middle: s,
        bottom: s
    }));

    return (
        <div className="main-content">
            {/* Other main content elements here */}

            <div className="scrollable-section-container">
                <ScrollableSection images={images} />
            </div>
            {/* More main content elements here */}

        </div>
    );
}

export default Dashboard