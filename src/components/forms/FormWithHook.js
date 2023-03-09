import { useForm } from 'react-hook-form';

const FormWithHook = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const Save = (data) => {
        console.log(">>>>>>>>>>. form submited", data)
    }

    const formWatcher = watch()
    console.log("🚀 ~ file: FormWithHook.js:12 ~ FormWithHook ~ formWatcher:", formWatcher)


    return (
        <div>
            <h2>React Form Hook Library</h2>
            <p> Third party library used to manage react forms. </p>
            <hr />

            <div className="w-50 mx-auto p-5 rounded">
                <form onSubmit={handleSubmit(Save)}>
                    <fieldset>
                        <h2>Sign Up</h2>
                        <div className="Field">
                            <label>
                                First name <sup>*</sup>
                            </label>
                            <input {...register('firstName', { required: 'Name is required.', minLength: { value: 3, message: 'Minimum 3 chars' } })} className='form-control' placeholder="First name" />
                            <p className="text-danger">{errors.firstName?.message}</p>
                        </div>
                        <div className="Field">
                            <label>Last name</label>
                            <input {...register('lastName')} className='form-control' placeholder="Last name" />
                        </div>
                        <div className="Field">
                            <label>
                                Email address <sup>*</sup>
                            </label>
                            <input {...register('email')} className='form-control' placeholder="Email address" />
                        </div>
                        <div className="Field">
                            <label>
                                Password <sup>*</sup>
                            </label>
                            <input {...register('password')} className='form-control' placeholder="Password" type="password" />
                        </div>
                        <div className="Field">
                            <label>
                                File <sup>*</sup>
                            </label>
                            <input {...register('file')} className='form-control' type="file" />
                        </div>
                        <div className="Field">
                            <label>
                                Role <sup>*</sup>
                            </label>
                            <select {...register('role')} className='form-control'>
                                <option value="role">Role</option>
                                <option value="individual">Individual</option>
                                <option value="business">Business</option>
                            </select>
                        </div>
                        <button type="submit" className='btn btn-primary'>
                            Create account
                        </button>
                    </fieldset>
                </form>
            </div>

        </div>
    );
}

export default FormWithHook;