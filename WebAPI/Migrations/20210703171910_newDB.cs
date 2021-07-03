using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class newDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Price = table.Column<int>(nullable: false),
                    Stock = table.Column<int>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    CategoryType = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Images = table.Column<string>(nullable: true),
                    PrimaryImage = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(nullable: false),
                    Password = table.Column<byte[]>(nullable: false),
                    PasswordKey = table.Column<byte[]>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Mobile = table.Column<int>(nullable: true),
                    Tara = table.Column<string>(nullable: true),
                    Judet = table.Column<string>(nullable: true),
                    Oras = table.Column<string>(nullable: true),
                    Strada = table.Column<string>(nullable: true),
                    Numar = table.Column<int>(nullable: true),
                    Pfp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderdBy = table.Column<int>(nullable: false),
                    BoughtOn = table.Column<DateTime>(nullable: false),
                    ProductId = table.Column<int>(nullable: false),
                    OrderPrice = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Orders_Users_OrderdBy",
                        column: x => x.OrderdBy,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Orders_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Orders_OrderdBy",
                table: "Orders",
                column: "OrderdBy");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ProductId",
                table: "Orders",
                column: "ProductId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
