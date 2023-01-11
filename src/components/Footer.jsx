import { BrandGithub } from 'tabler-icons-react';

export default function Footer() {
    return (
        <div className="bg-[#0A1220] font-light">
            <div className="py-4 mx-12 text-sm  cursor-pointer flex text-[#ffffff4d] gap-x-1 items-center justify-center">
                <BrandGithub size={24} color="#ffffff4d" />
                <div className="">© 2023, mesifer</div>
            </div>
        </div>
    );
}
