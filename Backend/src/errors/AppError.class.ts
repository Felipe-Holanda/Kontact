class AppError extends Error {
    public readonly status: number;
    public readonly message: string;

    constructor(message: string, status: number = 400) {
        super(message);
        this.status = status;
    }
}

export default AppError;