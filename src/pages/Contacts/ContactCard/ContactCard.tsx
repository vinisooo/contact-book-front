import { UserIcon } from "../../../components/UserIcon/UserIcon";
import { iContact } from "../../../interfaces/contact.interfaces";
import { StyledContactCard } from "./styled";


const copyToClipboard = (content: string) => {
    const textField = document.createElement('textarea');
    textField.innerText = content;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
};

interface iContactCardProps{
    contact: iContact
}

export const ContactCard = ({contact}: iContactCardProps) => {

    const handleCopyEmail = () => {
        copyToClipboard(contact.email);
      };
    
      const handleCopyPhone = () => {
        copyToClipboard(contact.phone);
      };
    

    return(
        <StyledContactCard>
            <header>
                <div>
                    <UserIcon initialLetter={contact.name[0]}/>
                    <h3>{contact.name}</h3>
                </div>
                <button>...</button>
            </header>
            <div className="contact-info">
                <div>
                    <button onClick={handleCopyEmail}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png"/>
                    </button>
                    <span>{contact.email}</span>
                </div>
                <div>
                    <button onClick={handleCopyPhone}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png"/>
                    </button>
                    <span>{contact.phone}</span>
                </div>
            </div>
        </StyledContactCard>
    )
}
