export default function Footer(){
    const year = new Date().getFullYear();

    return(
        <footer className='mt-10 bg-layout px-4 py-6 text-center'>
            <p className='font-istok text-sm font-medium text-white'>
                &copy; {year} Kohi Piloting Service. Not Affiliated with Kuro Games. All rights reserved.
            </p>
        </footer>
    );
}