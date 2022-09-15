import './Image.scss';
import { Text } from '../Text/Text';
export function Image({color}) {
    return <>
        <div className={`image-text-color ${color}`}>
            <div className='inner-text'>Title</div>
            <Text text="Image Text"></Text>
        </div>
    </>
}