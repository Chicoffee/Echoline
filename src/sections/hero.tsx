import { FaFacebook, FaTiktok, FaXTwitter, FaDiscord } from 'react-icons/fa6'

function Hero(){
    return(
        <div id='hero' className='flex items-center justify-center p-8 scroll-mt-24'>
            <div className='max-w-5xl w-full grid grid-cols-1 items-center'>
                <div className='text-white font-istok'>
                    <p className='font-bold text-blue-500 text-lg mb-2'>Wuthering Waves Pilot Service</p>
                    <h1 className='font-bold text-4xl leading-tight mb-2'>Skip the grind, keep the rewards</h1>
                    <p className='max-w-xl'>
                        Struggling with the grind? No time to play? Or just not in the mood for
                        in-game chores? No worries, I’ve got you covered. I’m here to assist you
                        and make your progress effortless.
                    </p>
                    <br />
                    <ul className='list-disc pl-5'>
                        <li>Full map exploration pilot</li>
                        <li>Fast astrite farming for your next pulls</li>
                        <li>Daily update every night PH timezone</li>
                        <li>Trust, safe, and efficient service</li>
                    </ul>

                    <div>
                        <ul className='flex gap-5 items-center mt-4'>
                            <li><a target='_blank' href="https://www.facebook.com/C823S"><FaFacebook className='w-7 h-7'/></a></li>
                            <li><a target='_blank' href="https://www.tiktok.com/@dev.kohi"><FaTiktok className='w-7 h-7'/></a></li>
                            <li><a target='_blank' href="https://x.com/dev_kohi"><FaXTwitter className='w-7 h-7'/></a></li>
                            <li><a target='_blank' href="https://discord.com/users/774587141761531925"><FaDiscord className='w-7 h-7'/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero