import Link from "next/link";

const BackBtn = () => {
    return (
        <button>
            <Link href={"./"}>
                Back to previous page
            </Link>
        </button>

    );
};

export default BackBtn;
