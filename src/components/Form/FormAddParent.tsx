import { useFormik } from 'formik';
import { useState } from 'react';
import { date, object, string } from 'yup';
import { OrangeFullButton } from '../Button/CustomButton';
import AddCHildButton from '../Button/ButtonAddChild';
import ButtonRemoveChild from '../Button/ButtonRemoveCHild';

interface FormAddParentInterface {
    firstName: string;
    lastName: string;
    email: string;
    nameChild: string;
    birthday: string;
    classChild: string;
}
export const FormAddParent = () => {

    const [parents, setParents] = useState<FormAddParentInterface>({
        firstName: '',
        lastName: '',
        email: '',
        nameChild: '',
        birthday: '',
        classChild: '',
    });

    const userSchema = object({
        firstName: string().required('nom obligatoire').min(2, 'prénom trop court'),
        lastName: string().required('prénom obligatoire').min(2, 'nom trop court'),
        email: string().email('Invalid email address').required('email obligatoire'),
        nameChild: string().required('nom obligatoire').min(2, 'nom trop court'),
        birthday: date(),
        classChild: string(),
    })

    const formik = useFormik({
        initialValues: parents,
        validationSchema: userSchema,


        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <form className="mb-4 sm:w-96 w-full" onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" onChange={formik.handleChange}
                        value={formik.values.lastName} name='lastName' className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange" />
                    <small>{formik.errors.lastName}</small>
                </div>
                <div className="mb-4">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" onChange={formik.handleChange}
                        value={formik.values.firstName} name='firstName' className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange" />
                    <small>{formik.errors.firstName}</small>
                </div>
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={formik.handleChange}
                        value={formik.values.email} name="email" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange" />
                    <small>{formik.errors.email}</small>
                </div>
                <div>
                    <div className="mb-4">
                        <label htmlFor="nameChild">Nom de l'enfant</label>
                        <input type="text" onChange={formik.handleChange}
                            value={formik.values.nameChild} name="nameChild" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange" />
                        <small>{formik.errors.nameChild}</small>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="birthday">Date de naissance de l'enfant</label>
                        <input type="text" onChange={formik.handleChange}
                            value={formik.values.birthday} name="birthday" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange" />
                        <small>{formik.errors.birthday}</small>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="classChild">Classe de l'enfant</label>
                        <input type="text" onChange={formik.handleChange}
                            value={formik.values.classChild} name="classChild" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange" />
                        <small>{formik.errors.birthday}</small>
                    </div>
                </div>
                <div className='mt-10 flex gap-6'>
                    <AddCHildButton />
                    <div>
                        <ButtonRemoveChild />
                    </div>
                </div>
                <div className='mt-10'>
                    <OrangeFullButton type="submit">VALIDER</OrangeFullButton>
                </div>
            </form >
        </>
    )
}