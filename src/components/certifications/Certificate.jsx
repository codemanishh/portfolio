const CertificateData = [
    { id: 1, carName: "R8 GT", carBrand: "Audi", carImage: "https://www.wsupercars.com/thumbnails/Audi/2023-Audi-R8-Coupe-V10-GT-RWD-001.jpg" },
    { id: 2, carName: "Aventador Ultimae", carBrand: "Lamborghini", carImage: "https://www.wsupercars.com/thumbnails/Lamborghini/2022-Lamborghini-Aventador-LP780-4-Ultimae-Roadster-001.jpg" },
    // ... other car objects
    { id: 10, carName: "SC 63", carBrand: "Lamborghini", carImage: "https://www.wsupercars.com/wp-content/uploads/2024-Lamborghini-SC63-004.jpg" },
    { id: 5, carName: "Vantage GT3", carBrand: "Austin Martin", carImage: "https://www.wsupercars.com/wp-content/uploads/2024-Aston-Martin-Vantage-GT3-001.jpg" }, { id: 6, carName: "Vantage", carBrand: "Austin Martin", carImage: "https://www.wsupercars.com/wp-content/uploads/2025-Aston-Martin-Vantage-001.jpg" }, { id: 7, carName: "Huracan", carBrand: "Lamborghini", carImage: "https://www.wsupercars.com/wp-content/uploads/2023-Lamborghini-Huracan-STO-SC-10-Anniversario-001.jpg" }, { id: 8, carName: "911 GT3 R", carBrand: "Porsche", carImage: "https://www.wsupercars.com/wp-content/uploads/2023-Porsche-911-GT3-R-Rennsport-001.jpg" }, { id: 9, carName: "Mustang GTD", carBrand: "Ford", carImage: "https://www.wsupercars.com/wp-content/uploads/2025-Ford-Mustang-GTD-001.jpg" }, { id: 10, carName: "SC 63", carBrand: "Lamborghini", carImage: "https://www.wsupercars.com/wp-content/uploads/2024-Lamborghini-SC63-004.jpg" }
];

const Certificate = () => {
    const mappedData = CertificateData.map(car => (
        <img key={car.id} src={car.carImage} alt={`${car.carName}.png`} />
    ));

    return (
        <div className="container">
            {mappedData}
        </div>
    );
};

export default Certificate;

// css

// https://codepen.io/Meet-the-reactor/pen/xxNpJOK 