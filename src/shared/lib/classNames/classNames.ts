type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string, // главный класс элемента
    mods: Mods = {}, // объект из модов {hovered:true, red:true}
    additional: string[] = [], // массив с дополненительными классами
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value)) //оставляем только те элементы Boolean
        // которых равен true
            .map(([className]) => className), // возвращаем только ключи тоесть название классов
    ].join(" ");
}
