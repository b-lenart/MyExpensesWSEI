using Microsoft.EntityFrameworkCore.Migrations;

namespace MyExpenses.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ExpenseDetails",
                columns: table => new
                {
                    ExpenseId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Date = table.Column<string>(type: "varchar(10)", nullable: false),
                    Type = table.Column<string>(type: "varchar(40)", nullable: false),
                    Amount = table.Column<string>(type: "varchar(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExpenseDetails", x => x.ExpenseId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ExpenseDetails");
        }
    }
}
