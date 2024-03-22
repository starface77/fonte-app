import './style.scss'
import Heading from '../common/Heading';
import MapComponent from '../common/MapComponent';

function Contacts(props) {
    function submit(e) {
        e.preventDefault()
    }

    return (
        <div className='contacts'>
            <div id="contacts-wrapper">
                <div className="left">
                    <Heading size={1.5}>Контакты</Heading>
                    <div className='info'>
                        <h4>Задайте нам любой вопрос</h4>
                        <p>+7 123123 123123</p>
                    </div>
                    <div className='info'>
                        <h4>Электронная почта</h4>
                        <p>sfc@gmail.com</p>
                    </div>
                    <div className='info'>
                        <h4>Юридический адрес</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, numquam natus rerum consequuntur deleniti earum atque aperiam doloribus, excepturi nobis molestias necessitatibus ut aspernatur error commodi quidem qui ex sit.</p>
                    </div>
                </div>
                <div className="right">
                    <form onSubmit={submit}>
                        <input type="text" placeholder='Полное Имя' required />
                        <input type="email" placeholder='Email' required />
                        <input type="text" placeholder='Телефон' required />
                        <button className='submit-btn'>
                            Отправить
                        </button>
                    </form>
                </div>
            </div>

            <div className="maps">
                <div className="left">
                    <div id="map-1">
                        <MapComponent />
                    </div>
                </div>
                <div className="right">
                    <div id="map-2">
                        <MapComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
