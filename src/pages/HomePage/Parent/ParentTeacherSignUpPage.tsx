import { ChangeEvent, FormEvent, useState } from "react";
import AddChildButton from "../../../components/Button/ButtonAddChild";
import ButtonRemoveChild from "../../../components/Button/ButtonRemoveChild";
import { OrangeFullButton } from "../../../components/Button/CustomButton";
import { NavBarNewProfil } from "../../../components/NavBar/NavBarNewProfil";
import AddDisciplineButton from "../../../components/Button/ButtonAddDiscipline";


import { FormUserFLEInterface } from "../../../utils/Interface/FormUseStateParentInterface";
import { FormChildInterface } from "../../../utils/Interface/FormUseStateChildInterface";

export const ParentTeacherSignUp = () => {
   

    const [parents, setParents] = useState<FormUserFLEInterface>({
        firstName: '',
        lastName: '',
        email: '',
    });

    const [children, setChildren] = useState<FormChildInterface[]>([
        {
            name: '',
            birthday: '',
            class: '',
        },
    ]);

    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'lastName' || name === 'firstName' || name === 'email') {
            setParents(prevParents => ({ ...prevParents, [name]: value }));
            setFormErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        } else {
            const childIndex = Number(name.split('_')[1]);
            const childField = name.split('_')[0];
            
            setChildren(prevChildren => prevChildren.map((child, index) => {
                if (index === childIndex) {
                    return { ...child, [childField]: value };
                }
                return child;
            }));
            
            setFormErrors(prevErrors => ({ ...prevErrors, [`child_${childIndex}_${childField}`]: '' }));
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const errors: { [key: string]: string } = {};

        if (!parents.firstName.trim()) {
            errors.firstName = 'Le prénom est requis.';
        } else if (parents.firstName.trim().length < 2) {
            errors.firstName = 'Le prénom doit contenir au moins 2 caractères.';
        }

        if (!parents.lastName.trim()) {
            errors.lastName = 'Le nom est requis.';
        } else if (parents.lastName.trim().length < 2) {
            errors.lastName = 'Le nom doit contenir au moins 2 caractères.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!parents.email.trim()) {
            errors.email = 'L\'email est requis.';
        } else if (!emailRegex.test(parents.email.trim())) {
            errors.email = 'L\'email est invalide.';
        }

        children.forEach((child, index) => {
            if (!child.name.trim()) {
                errors[`child_${index}_name`] = 'Le nom de l\'enfant est requis.';
            } else if (child.name.trim().length < 2) {
                errors[`child_${index}_name`] = 'Le nom de l\'enfant doit contenir au moins 2 caractères.';
            }

            if (!child.birthday.trim()) {
                errors[`child_${index}_birthday`] = 'La date de naissance de l\'enfant est requise.';
            }

            if (!child.class.trim()) {
                errors[`child_${index}_class`] = 'La classe de l\'enfant est requise.';
            }
        });

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log("🚀 ~ handleSubmit ~ children:", children)
            console.log("🚀 ~ handleSubmit ~ parents:", parents)
        }
    };

    const handleAddChild = () => {
        if (children.length < 4) {
            setChildren(prevChildren => [
                ...prevChildren,
                {
                    name: '',
                    birthday: '',
                    class: '',
                },
            ]);
        }
    };

    const handleRemoveChild = (index: number) => {
        setChildren(prevChildren => prevChildren.filter((_, i) => i !== index));
    };

    const handleModalDiscipline = () => {
        console.log("la modal est ouverte");
        
    };
    

    return (
        <>
            <NavBarNewProfil />
            <div className='grid grid-col items-center justify-center mt-20'>
                <h2 className='text-xl font-semibold mb-3'>Remplissez les informations requises :</h2>
                <form className="mb-4 sm:w-96 w-full" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="lastName">Nom</label>
                        <input
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                        />
                        {formErrors.lastName && <p className="custom-orange">{formErrors.lastName}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="firstName">Prénom</label>
                        <input
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                        />
                        {formErrors.firstName && <p className="text-red-500">{formErrors.firstName}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                        />
                        {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
                    </div>
                    {children.map((child, index) => (
                        <div key={index}>
                            <div className="mb-4">
                                <label htmlFor={`nameChild${index + 1}`}>Nom de l'enfant {index + 1}</label>
                                <input
                                    type="text"
                                    name={`name_${index}`}
                                    value={child.name}
                                    onChange={handleChange}
                                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                                />
                                {formErrors[`child_${index}_name`] && <p className="text-red-500">{formErrors[`child_${index}_name`]}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor={`birthday${index + 1}`}>Date de naissance de l'enfant {index + 1}</label>
                                <input
                                    type="text"
                                    name={`birthday_${index}`}
                                    value={child.birthday}
                                    onChange={handleChange}
                                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                                />
                                {formErrors[`child_${index}_birthday`] && <p className="text-red-500">{formErrors[`child_${index}_birthday`]}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor={`classChild${index + 1}`}>Classe de l'enfant {index + 1}</label>
                                <input
                                    type="text"
                                    name={`class_${index}`}
                                    value={child.class}
                                    onChange={handleChange}
                                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                                />
                                {formErrors[`child_${index}_class`] && <p className="text-red-500">{formErrors[`child_${index}_class`]}</p>}
                            </div>
                            {index > 0 && (
                                <div onClick={() => handleRemoveChild(index)}>
                                    <ButtonRemoveChild />
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="mt-6" onClick={handleAddChild}>
                        <AddChildButton />
                    </div>
                    <div onClick={handleModalDiscipline}>
                        <h3 className="mt-3 mb-3" >Renseigner des matières : </h3>
                        <AddDisciplineButton />
                    </div>
                    <div className="mt-10">
                        <OrangeFullButton type="submit">VALIDER</OrangeFullButton>
                    </div>
                </form>
            </div>
        </>
    );
};