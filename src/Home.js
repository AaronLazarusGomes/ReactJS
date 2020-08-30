import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="brand" />
            
            <div className = "home__row">
            <Product
            key = {1}
                id = "1"
                title = "Harry Potter and the Deathly Hallows (The full edition)"
                price = {200}
                rating = {5}
                image = "https://images-na.ssl-images-amazon.com/images/I/914CT7iyyvL.jpg" />
                <Product
                key = {6}
                id = "2"
                title = "Asterix and the Chieftans daughter"
                price = {150}
                rating = {4}
                image = "https://upload.wikimedia.org/wikipedia/en/9/91/Asterix_v38.jpg" />
            </div>
            <div className = "home__row">
            <Product
            key = {2}
                id = "3"
                title = "The Secret Seven: Is Exciting Adventures (Set of 15 Books)"
                price = {450}
                rating = {4}
                image = "https://images-na.ssl-images-amazon.com/images/I/81sgDq6PVJL.jpg" />
                <Product
                key = {3}
                id = "4"
                title = "Hardy Boys: Dead on Target"
                price = {75}
                rating = {3}
                image = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1176213831l/603642.jpg" />
                <Product
                key = {4}
                id = "5"
                title = "Paulo Coelho (Delux Collection)"
                price = {750}
                rating = {5}
                image = "https://s3.ap-south-1.amazonaws.com/storage.commonfolks.in/docs/products/images_full/paulo-coelho-the-deluxe-collection_FrontImage_195.jpg" />
            </div>
            <div className = "home__row">
            <Product
            key = {5}
                id = "6"
                title = "Java Programming: Surbhi Kakar"
                price = {250}
                rating = {5}
                image = "https://www.wileyindia.com/pub/media/catalog/product/cache/1/image/700x560/e9c3970ab036de70892d86c6d221abfe/9/7/9789389520910.jpg" />
            </div>
            
            
        </div>
    )
}

export default Home
