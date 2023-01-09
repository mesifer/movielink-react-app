export default function Slider() {
    const slides = [
        {
            url: 'https://iso.500px.com/wp-content/uploads/2016/10/stock-photo-159358357.jpg',
        },
        {
            url: 'https://wallpaperaccess.com/full/1209562.jpg',
        },
        {
            url: 'https://iso.500px.com/wp-content/uploads/2016/10/stock-photo-159358357.jpg',
        },
        {
            url: 'https://wallpaperaccess.com/full/1209562.jpg',
        },
    ];
    return (
        <div className='w-full h-[100vh]'>
            <div style={{ backgroundImage: `url(${slides[1].url})` }} className='bg-cover w-full h-full'>
                <div className='layer bg-[#0f172aa4]  w-full h-full'></div>
            </div>
        </div>
    );
}
