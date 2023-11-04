export function useStatus(status) {
    let ruStatus;
    switch (status) {
        case "done":
            ruStatus = "Выполнено";
            break;
    }
    switch (status) {
        case "pending":
            ruStatus = "Готовится";
            break;
    }
    switch (status) {
        case "create":
            ruStatus = "Создан";
            break;
    }
    return ruStatus
}