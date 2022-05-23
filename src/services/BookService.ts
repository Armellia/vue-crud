import axios from "axios"
import type book from "./../models/Book"
class BookService{
    url="http://localhost:3001/books"
    getAll(){
        return axios.get(this.url)
    }
    getId(id:any){
        return axios.get(`${this.url}/${id}`)
    }
    create(book:book){
        return axios.post<book>(this.url,book)
    }
    delete(id:any){
        return axios.delete(`${this.url}/${id}`)
    }
    update(id:any,book:book){
        return axios.put(`${this.url}/${id}`,book)
    }
    getTitle(title:string){
        return axios.get(`${this.url}?title_like=${title}`)
    }
}
export default new BookService