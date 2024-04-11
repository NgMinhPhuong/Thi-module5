import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import {  updateProduct} from '../service/studentService';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom'
import * as Yup from 'yup'
function FormEdit(){
    const navigate = useNavigate()
    const products = useLocation().state
    console.log(products);
        const handleSubmit = (value) => {
            const data = {
                id:products.id,
                ...value
            }
            updateProduct(data)
            navigate('/')
            toast.success("OK")
        }
        return (
            <>
            <h1>Cập nhật</h1>
                <Formik
                initialValues={{
                    title: products.title,
                    description: products.description,
                    price: products.price
                }}
                onSubmit={handleSubmit}
                validationSchema={Yup.object({
                    title: Yup.string().max(30, 'Không được quá 30 ký tự').required('Không được để trống'),
                    description: Yup.string().required('Không được để trống'),
                    price: Yup.string().required('Không được để trống'),
                })}
                enableReinitialize={true}>
                    <Form className="form-group">
                        <label htmlFor="title">Tên sản phẩm: <ErrorMessage component={'span'} className='err' name='title'/></label>
                        <Field name="title" className="form-control" id="name" /><br />
                        <label htmlFor="description">Mô tả: <ErrorMessage component={'span'} className='err' name='description'/></label>
                        <Field name="description" className="form-control" id="description"/><br />
                        <label htmlFor="price">Giá: <ErrorMessage component={'span'} className='err' name='price'/></label>
                        <Field name="price" className="form-control" id="action"/><br />
                        <button type='submit' className="btn btn-primary">UPDATE</button>
                </Form>
                </Formik>
            </>
        )
}
export default FormEdit;