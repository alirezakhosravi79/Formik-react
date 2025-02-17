import { useFormik } from "formik";

import "./App.css";

export default function App() {

  return (
    <form>
      <p className="form-title">لطفا فرم زیر را کامل کنید</p>

      <main>
        <input type="text" placeholder="شماره تماس" />
        <input type="text" placeholder="نام و نام خانوادگی" />

        <input type="text" placeholder="ادرس" />

        <input type="email" placeholder="ایمیل" />
        <input type="password" placeholder="رمز عبور" />
        <input type="text" placeholder="توضیحات" />
      </main>

      <section>
        <select name="product" id="selectBox">
          <option>محصول خود را انتخاب کنید</option>
          <option>کیف</option>
          <option>کفش</option>
          <option>کمربند</option>
        </select>
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
          value=""
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          قوانین و مقررات و میپذیرم
        </label>
      </section>

      <button type="submit">ارسال</button>

      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
    </form>
  );
}
