export interface BzServicesInterface {
    service: 'Blockchain' | 'Gaming' | 'Development',
    background: string,
    backgroundMobile?: string,
    description?: string,
    items: ItemsServices[]
}

export interface ItemsServices {
    title: string,
    icon?: string,
    iconHover?: string,
    text?: string
}