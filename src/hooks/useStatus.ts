export function useStatus(status: string): string | undefined {
    let uzStatus;
    switch (status) {
        case "done":
            uzStatus = "Выполнено";
            break;
        case "pending":
            uzStatus = "Готовится";
            break;
        case "create":
            uzStatus = "Создан";
            break;
        default:
            uzStatus = "Неизвестный статус";
            break;
    }
    return uzStatus
}