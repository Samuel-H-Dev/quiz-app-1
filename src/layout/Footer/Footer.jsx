export default function Footer(){

    const getFullYear= new Date().getFullYear()


    return(
        <footer>
            <p>&copy; {getFullYear}</p>
        </footer>
    )
}