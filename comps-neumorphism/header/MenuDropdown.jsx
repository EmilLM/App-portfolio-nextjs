
import { Card, ListItem, ListItemGroup, CardContent } from 'ui-neumorphism';
import Link from 'next/link'

const MenuDropdown = ({clsName}) => {
    return (
        <Card className={clsName}>
            <CardContent>
                <ul>
                    <li className="first-draft">First draft -N/A</li>
                    <li>
                        <Link href="/">
                            <a>Second iteration</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Flowing waves</a>
                        </Link>
                    </li>
                    <li className="current-style">Neumorphism style</li>
                </ul>
            </CardContent>
        </Card>
    );
}
 
export default MenuDropdown;