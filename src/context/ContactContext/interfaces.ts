export interface iContactProviderProps{
    children: React.ReactNode
}

export interface iContactContextProps {
    phoneNumber: string
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>
    handlePhoneNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
