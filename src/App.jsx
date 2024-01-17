
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import TaskBoard from './task/TaskBoard'

function App() {
  return (
    <>
    {/* navbar */}
    <Header />
    
    <div className="flex flex-col justify-center items-center">
    {/* Hero */}
    <Hero />
    {/* TaskBoard */}
    <TaskBoard />
    </div>
    {/* Footer */}
    <Footer />
    </>
  )
}

export default App
