import { render, screen } from "@testing-library/react"
import Home from '@/app/page'

describe('Home', () => {
    it('should have Docs text', () =>{
        render(<Home/>)
    
        const myElem = screen.getByText('Choque Sarabia')
    
        expect(myElem).toBeInTheDocument()
    })
    it('should have a heading', () => {
        render(<Home/>)
    
        const myElem = screen.getByRole('heading', {
            name: 'Cristhian German'
        })
    
        expect(myElem).toBeInTheDocument()
    })
})

