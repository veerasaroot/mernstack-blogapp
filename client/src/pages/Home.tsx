import { useEffect } from 'react'

import NavigationBar from '../components/NavigationBar'
import ArticleCard from '../components/ArticleCard'

function Home() {
    useEffect(() => {
        document.title = 'Home | Blog'
    }, [])

    return (
        <div>
            <NavigationBar />
            <ArticleCard />
        </div>
    )
}

export default Home