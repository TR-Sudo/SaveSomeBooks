import Books from '../components/books';
import Nav from '../components/navbar';
import Footer from '../components/footer';

export default function Home(){
    return(
        <main>
            <Nav />
            <Books/>
            <Footer/>
        </main>        
    )
}