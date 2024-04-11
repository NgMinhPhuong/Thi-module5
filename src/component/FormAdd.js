import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { addProduct} from '../service/studentService';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import './FormAdd.css'
function FormAdd(){
    const navigate = useNavigate()
    const handleSubmit = (value) => {
        console.log('vào');
        addProduct(value)
        navigate('/')
        toast.success('OK')
    }
    return (
        <>
            <h1>Tạo mới</h1>
            <Formik
            initialValues={{
                title: '',
                description: '',
                price: ''
            
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
                title: Yup.string().max(30, 'Không được quá 30 ký tự').required('Không được để trống'),
                description: Yup.string().required('Không được để trống'),
                price: Yup.string().required('Không được để trống')
               
            })}
            enableReinitialize={true}>
                <Form className="form-group">
                        <label htmlFor="title">Name: <ErrorMessage component={'span'} className='err' name='title'/></label>
                        <Field name="title" className="form-control" id="name" /><br />
                        <label htmlFor="description">Description: <ErrorMessage component={'span'} className='err' name='description'/></label>
                        <Field name="description" className="form-control" id="description"/><br />
                        <label htmlFor="price">Action: <ErrorMessage component={'span'} className='err' name='price'/></label>
                        <Field name="price" className="form-control" id="action"/><br />
                        <button type='submit' className="btn btn-primary">ADD</button>
                </Form>
            </Formik>
        </>
    )
}

export default FormAdd